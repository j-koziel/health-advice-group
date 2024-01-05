import {
  Modal,
  ModalContent,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

export function AirQualityInfoModal({ isOpen, onOpenChange }) {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
      classNames={{
        body: "py-6",
        base: "border-textColor bg-altBackground text-textColor",
        header: "border-b-[1px] border-textColor",
        footer: "border-t-[1px] border-textColor",
        closeButton: "hover:bg-primary active:bg-primary",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Air Quality Explanation
            </ModalHeader>
            <ModalBody>
              <p>
                Air quality is a key factor which plays into our health. Here's
                an explanation as to what the numbers indicate.
              </p>
              <p>
                First, the AQI (Air Quality Index). This is a unit which
                represents the overall air quality. When the air quality is
                moderate you would see this{" "}
                <span className="text-warning">orange colour</span>. If the air
                quality is ever at a dangerous level you will see this{" "}
                <span className="text-danger">red colour</span>. At this level
                it is recommended that you remain{" "}
                <span className="text-bold underline">indoors</span> to avoid
                breathing in the toxic particles in the air.
              </p>
              <p>
                The rest of the numbers represent the amount of particles which
                are in the air. These are measured in PPM (Parts Per Million).
                To see the scale of when each component reaches a dangerous
                level please click{" "}
                <a
                  href="https://openweathermap.org/api/air-pollution#concept"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  here
                </a>
                .
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="foreground" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
