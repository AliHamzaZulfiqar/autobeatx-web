import { useState } from "react";
import classnames from "classnames";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

const OffCanvasPlacement = () => {
  const [canvasPlacement, setCanvasPlacement] = useState("start");
  const [canvasOpen, setCanvasOpen] = useState(false);

  const toggleCanvasStart = () => {
    setCanvasPlacement("start");
    setCanvasOpen(!canvasOpen);
  };

  const toggleCanvasEnd = () => {
    setCanvasPlacement("end");
    setCanvasOpen(!canvasOpen);
  };

  const toggleCanvasTop = () => {
    setCanvasPlacement("top");
    setCanvasOpen(!canvasOpen);
  };

  const toggleCanvasBottom = () => {
    setCanvasPlacement("bottom");
    setCanvasOpen(!canvasOpen);
  };

  return (
    <div className="demo-inline-spacing">
      <Button color="primary" onClick={toggleCanvasStart}>
        Toggle Start
      </Button>
      <Button color="primary" onClick={toggleCanvasEnd}>
        Toggle End
      </Button>
      <Button color="primary" onClick={toggleCanvasTop}>
        Toggle Top
      </Button>
      <Button color="primary" onClick={toggleCanvasBottom}>
        Toggle Bottom
      </Button>
      <Offcanvas
        direction={canvasPlacement}
        isOpen={canvasOpen}
        toggle={toggleCanvasStart}
      >
        <OffcanvasHeader toggle={toggleCanvasStart}>
          OffCanvas {canvasPlacement}
        </OffcanvasHeader>
        <OffcanvasBody
          className={classnames({
            "my-auto mx-0 flex-grow-0":
              canvasPlacement === "start" || canvasPlacement === "end",
          })}
        >
          <p
            className={classnames({
              "text-center":
                canvasPlacement === "start" || canvasPlacement === "end",
            })}
          >
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
          <Button
            color="primary"
            onClick={toggleCanvasStart}
            className={classnames({
              "mb-1": canvasPlacement === "start" || canvasPlacement === "end",
              "me-1": canvasPlacement === "top" || canvasPlacement === "bottom",
            })}
            {...(canvasPlacement === "start" || canvasPlacement === "end"
              ? { block: true }
              : {})}
          >
            Continue
          </Button>
          <Button
            outline
            color="secondary"
            onClick={toggleCanvasStart}
            {...(canvasPlacement === "start" || canvasPlacement === "end"
              ? { block: true }
              : {})}
          >
            Cancel
          </Button>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default OffCanvasPlacement;
