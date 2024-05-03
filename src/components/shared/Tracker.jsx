const Tracker = ({
  tracks = [],
  label,
  trackClass = 'bg-[red]',
  labelClass = '',
}) => {
  return (
    <>
      {label && (
        <p className="text-normal font-semibold top-0 left-3 ">{label}</p>
      )}
      <p className="text-sm font-semibold top-0 left-3 ">
        {tracks?.map((track, tId) => (
          <div key={tId}>
            <div className="flex gap-1">
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`w-2 h-2  drop-shadow-lg rounded-full ${trackClass}`}
                ></div>
                {tracks?.length - 1 !== tId && (
                  <div className={`border-l border-black h-5 mt-[-6px] `}></div>
                )}
              </div>
              <div className={`mt-[-5px] ${labelClass}`}>{track.label}</div>
            </div>
          </div>
        ))}
      </p>
    </>
  );
};

export default Tracker;
