class InitData {

    constructor(data){
        this.data = data;
    }

    getData = () => {
        return this.data;
    }


    setData = (par) => {
        this.data = par
    }

}

export default InitData