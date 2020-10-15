import React, {Component} from 'react'
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

class Controls extends Component {

    render(){
        return(<div>
            <div>My Fluent UI Welcome 21</div>
            <div>Button</div>
            <div>
            <DefaultButton text="Standard"  />
            <PrimaryButton text="Primary"/>

            </div>
            <div class="ms-Grid" dir="ltr">
            <div class="ms-Grid-row">
                <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2">A</div>
                <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg10">B</div>
            </div>
            </div>

        </div>);
    }

}

export default Controls;