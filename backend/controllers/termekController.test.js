import TermekController from "./termekController";
import { expect, jest, test } from "@jest/globals";

const mockedModel = jest.mock("../models/termekModel.js");

test("Sample test case", async () => {
    expect(true).toBe(true);
    const resultMock = {};
    mockedModel.getAll = jest.fn.mockResolvedValue([{ id: 1, nev: "Termék1", ar: 1000, keszlet: 10 }]);
    await TermekController.getAll({ params: {} }, { json: jest.fn() }, resultMock);
});
