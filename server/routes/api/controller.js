import data from "../../data/data.json";

export function getAllItems(req, res){
    res.json(data);
}

export function getOneItem(req, res) {
    res.json(data.data[req.params.itemId-1]);
} 