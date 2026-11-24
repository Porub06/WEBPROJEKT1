import { expect, jest, test } from "@jest/globals";

const termekModelMock = {
    getAll: jest.fn(),
    getById: jest.fn(),
    create: jest.fn(),
};

jest.unstable_mockModule("../models/termekModel.js", () => ({
    default: termekModelMock,
}));

const { default: TermekController } = await import("./termekController.js");

const createResponse = () => {
    const res = {
        status: jest.fn(),
        json: jest.fn(),
    };

    res.status.mockReturnValue(res);
    res.json.mockReturnValue(res);
    return res;
};

test("Sample test case", async () => {
    //SETUP
    const products = [{ id: 1, nev: "Keyboard" }];
    termekModelMock.getAll.mockResolvedValue(products);
    const res = createResponse();

    //ACT
    const result = await TermekController.getAll({ params: {} }, res);
    expect(result).toBeUndefined();

    //ASSERT
    expect(termekModelMock.getAll).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(products);
});
