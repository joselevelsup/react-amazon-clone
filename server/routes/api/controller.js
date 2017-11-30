import data from "../../data/data.json";

export function getAllItems(req, res){
    res.json(data);
}

export function getOneItem(req, res) {
    res.json(data.data[req.params.itemId-1]);
} 

export function searchItem(req, res){ 
    function regexEscape(str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    }
    
    var param = new RegExp(regexEscape(req.query.q), "i");
    var items = [];

    for(var i = 0; i < data.data.length; i++){
        var name = data.data[i].itemName;
        if(param.test(name)){
            items.push(data.data[i]);
            console.log(items);
        }
    }


    if(items.length > 0){
        res.json({
            "success": true,
            "items": items
        });
    } else {
        res.json({
            "success": false,
            "reason": "No items match"
        });
    }
}