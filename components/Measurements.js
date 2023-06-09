
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Measurements() {
    const [measurements, setMeasurements] = useState([]);

    useEffect(() => {
        async function fetchMeasurements() {
            try {
                const response = await axios.get('./api/getMeasurements');
                setMeasurements(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMeasurements();
    }, []);

    return (
        <div>
            <h1>Measurements</h1>
            {measurements.map((measurement) => (
                <div key={measurement.id}>
                    <p>{measurement.measurement_time}</p>
                    <p>{measurement.Condition}</p>
                    {/* Render other measurement fields */}
                </div>
            ))}
        </div>
    );
}

export default Measurements;
