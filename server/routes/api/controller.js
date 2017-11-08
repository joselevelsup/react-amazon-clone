import data from "../../data/data.json";

export const getAllItems = (req, res) => {
    res.json(data);
}