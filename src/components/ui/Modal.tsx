import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { PlayIcon } from "./Icons";
import { Video } from "../../types";
import LiteYoutuve from "./LiteYoutuve";

interface Props {
  trailer: Video;
}

export default function Modal({ trailer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function showModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        onClick={showModal}
        className="font-semibold flex items-center gap-2 border border-sky-500 px-2 text-sky-400 rounded-lg"
      >
        <PlayIcon classname="fill-sky-500" />
        Ver tráiler
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={showModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full md:max-w-[800px] bg-black backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white p-2"
              >
                Reproducir tráiler
              </DialogTitle>

              <LiteYoutuve
                id={trailer.key}
                title={trailer.name}
                key={trailer.key}
              />

              {/* <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div> */}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}