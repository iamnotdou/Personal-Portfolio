import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
function DynamicIsland() {
  const [data, setData] = useState(null);
  const fetchPresence = () => {
    fetch(`/api/getListening`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  };
  useEffect(() => {
    fetchPresence();
    setInterval(() => {
      fetchPresence();
    }, 1000);
  }, []);
  return (
    <>
      <AnimatePresence>
        {data && data.isPlaying && (
          <motion.div
            exit={{ scale: 0, y: -200, transition: { delay: 1 } }}
            transition={{ duration: 0.3 }}
            className="w-full flex items-center justify-center absolute top-4"
          >
            <motion.div
              onClick={() => {
                window.open(data.uri);
              }}
              initial={{
                maxWidth: 40,
                scale: 0,
                y: -200,
              }}
              animate={{
                maxWidth: 320,
                scale: 1,
                y: 0,
              }}
              exit={{
                maxWidth: 40,
              }}
              transition={{
                duration: 0.25,
                maxWidth: {
                  duration: 0.4,
                  delay: 0.45,
                },
              }}
              whileTap={{
                scale: 0.98,
                boxShadow: "0 4px 3rem 2px #00000010",
              }}
              whileHover={{
                scale: 1.05,
                maxWidth: 700,
                boxShadow: "0 4px 3rem 2px #00000050",
                transition: {
                  delay: 0,
                  duration: 0.6,
                },
              }}
              className=" cursor-pointer relative flex min-w-[40px] items-center overflow-hidden h-10 bg-black whitespace-nowrap outline-none  w-fit rounded-full select-none text-white font-[500] text-sm p-2.5 pr-3.5"
            >
              <span className="z-[40]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 inline mr-2.5"
                  version="1.1"
                  viewBox="0 0 168 168"
                >
                  <path
                    fill="#1ED760"
                    d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                  />
                </svg>
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="overflow-hidden text-ellipsis "
              >
                <span className="text-zinc-500">Listening </span>
                <span>{data.name + " "}</span>
                <span className="text-zinc-500">by </span>
                <span>{data.artists}</span>
              </motion.span>{" "}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default DynamicIsland;
