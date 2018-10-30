import React, { Component } from 'react';
import { Button } from 'antd';


class Hola extends Component {

    render() {
        return <Button type="primary" onClick={() => alert("hola")}>
            HOla
        </Button>
    }
}

export default Hola;