import React from 'react';
import PropTypes from 'prop-types'
import {Panel} from "../.././containers";
import {FaWeightHanging} from 'react-icons/fa';

const Main = ({title = ""}) => (
    <header className="d-flex justify-content-between border-bottom align-items-center p-2">
            <div className="col-lg-5">
                <h2 className="text-white d-flex align-items-center">
                    <FaWeightHanging className="mr-1"/>
                    {title}
                </h2>
            </div>
            <Panel/>
    </header>

);
Main.propTypes = {
    title: PropTypes.string,
};
export default Main;