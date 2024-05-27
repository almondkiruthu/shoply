const NotFound = () => {
  return (
    <>
      <div className="-mt-4 flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="font-heading text-4xl text-primary">Not found</h1>
        <p className="font-sans_regular text-base text-black">
          Looks like this page doesn&apos;t exist
          <span>☹️</span>
        </p>
      </div>
    </>
  );
};

export default NotFound;
