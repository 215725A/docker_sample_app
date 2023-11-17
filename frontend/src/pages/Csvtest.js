import React, { useState, useEffect } from "react";

function CSVTest() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchDB();
    }, []);

    const fetchDB = async () => {
        try {
            const response = await fetch('http://localhost:8000/info');
            if (response.ok) {
                const result = await response.json();
                setInfo(result);
            } else {
                throw new Error("Failed to fetch data");
            }
        } catch(error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <div>
            <h1>This is CSV test page.</h1>

            <table>
                <thead>
                    <tr>
                        <th>氏名</th>
                        <th>氏名(ひらがな)</th>
                        <th>年齢</th>
                        <th>生年月日</th>
                        <th>性別</th>
                        <th>郵便番号</th>
                        <th>住所</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map(inf => {
                        let genderClass = '';
                        if (inf.gender === '男') {
                            genderClass = 'male-text';
                        } else if (inf.gender === '女') {
                            genderClass = 'female-text';
                        } else {
                            genderClass = 'other-class';
                        }

                        return (
                            <tr>
                                <td>{inf.uname}</td>
                                <td>{inf.uhname}</td>
                                <td>{inf.age}</td>
                                <td>{inf.birth}</td>
                                <td className={genderClass}>{inf.gender}</td>
                                <td>{inf.postnum}</td>
                                <td>{inf.uaddress}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CSVTest;