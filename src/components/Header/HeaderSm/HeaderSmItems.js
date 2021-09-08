import React from 'react'
import CustomIcon from '../../CustomIcon/CustomIcon';
import { items } from './data';
import { Item, Link } from './HeaderSmStyles';

function HeaderSmItems({ restoreToDefault }) {
    return items.map((item) => (
        <Item
            key={item.id}
            initial={{ x: `100vw` }}
            animate={{ x: '0vw' }}
            transition={{
                ease: [0.06, 0.9, 1, 0.98],
                duration: 0.7,
                delay: `${(item.id * 5 + 0.5) / 100}`,
            }}
        >
            <Link
                to={item.path}
                onClick={() => restoreToDefault()}
            >
                {item.name}
                <CustomIcon
                    name="icon-chevron1"
                    size={20}
                    color="hsl(240, 6%, 54%)"
                    customStyle={{ marginTop: '5px' }}
                />
                
            </Link>
        </Item>
    ));
}

export default HeaderSmItems
