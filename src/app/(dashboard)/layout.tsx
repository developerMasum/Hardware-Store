const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-full bg-zinc-900 font-nunito relative">
        {children}
      </div>
    </>
  );
};

export default CommonLayout;
