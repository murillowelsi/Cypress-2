import { generateFixture } from "../../fixtures/play";

describe("Creates each item", () => {
  const testData = generateFixture()

  context(`Test Context`, () => {
    testData.hits.forEach((hit) => {
      it(`Creates item with id: ${hit.objectId}`, () => {
        cy.log(JSON.stringify(hit));
      });
    });
  });
});
