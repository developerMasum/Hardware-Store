// import { jwtDecode } from "jwt-decode";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// type Role = keyof typeof roleBasedPrivateRoutes;

// const AuthRoutes = ["/account/login", "/account/register"];
// const commonPrivateRoutes = ["/dashboard"];
// const roleBasedPrivateRoutes = {
//   admin: [/^\/dashboard\/admin/],
//   user: [/^\/dashboard\/user/],
// };

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // 🔥 FIX — cookies() must be awaited
//   const cookieStore = await cookies();
//   const accessToken = cookieStore.get("accessToken")?.value;

//   if (!accessToken) {
//     if (AuthRoutes.includes(pathname)) {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(new URL("/account/login", request.url));
//     }
//   }

//   if (accessToken && commonPrivateRoutes.includes(pathname)) {
//     return NextResponse.next();
//   }

//   let decodedData: any;
//   try {
//     decodedData = jwtDecode(accessToken);
//   } catch (e) {
//     return NextResponse.redirect(new URL("/account/login", request.url));
//   }

//   const role = decodedData?.role;

//   if (role && roleBasedPrivateRoutes[role as Role]) {
//     const routes = roleBasedPrivateRoutes[role as Role];
//     if (routes.some((route) => pathname.match(route))) {
//       return NextResponse.next();
//     }
//   }

//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: ["/account/login", "/account/register", "/dashboard/:page*"],
// };

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // ✅ Simply allow all requests to pass through
  return NextResponse.next();
}

export const config = {
  matcher: ["/account/login", "/account/register", "/dashboard/:page*"],
};
