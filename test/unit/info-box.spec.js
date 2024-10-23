import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";
import { PLATFORM } from "aurelia-pal";

describe("Info-Box", () => {
  it("should render the username and topic", (done) => {
    let component = StageComponent.withResources(
      PLATFORM.moduleName("info-box"),
    ).inView("<info-box></info-box>");

    component
      .create(bootstrap)
      .then(() => {
        const h1 = component.element.querySelector("h1").innerHTML;
        const pa = component.element.querySelector("p").innerHTML;

        expect(h1).toBe("Hello, Reader!");
        expect(pa).toBe("You are learning: <b>Testing and Debugging </b>");

        done();
      })
      .catch((e) => {
        console.log(e.toString());
        done();
      });
  });
});
