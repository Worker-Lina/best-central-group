import React from 'react';
import { RoomList } from '../../../../entities/Room';
import { RoomFilters } from '../RoomFilters/RoomFilters';

const MainPage = () => {

    return (
        <div>
            <RoomFilters/>
            <RoomList/>
        </div>
    );
};

export default MainPage;