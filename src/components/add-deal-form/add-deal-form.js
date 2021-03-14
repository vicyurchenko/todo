import React, {Component}  from "react";
import './add-deal-form.css';

export default class AddDealForm extends Component {
    render() {
        return (
            <div className="add-deal-form">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onDealAdd('New Deal')}
                >
                    Add New Deal
                </button>
            </div>
        );
    }
}