import React, { useRef, useState } from 'react';
import Component1 from './components/Component1/Component1';
import { useRecoilState } from 'recoil';
import { inputState } from './atoms/inputState';

function GlobalState() {

    // inputState 안에 atom 를 정의한 것을 가져와서 전역함수로 지역함수 연결
    const [ value, setValue ] = useRecoilState(inputState);

    return (
        <div>
            <h1>{value}</h1>
            <Component1 />
        </div>
    );
}

export default GlobalState;