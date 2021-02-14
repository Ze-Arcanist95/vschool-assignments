function getData(){
    axios.get("https://api.vschool.io/ze_arcanist95/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

