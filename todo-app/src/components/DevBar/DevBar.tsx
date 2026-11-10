import React from 'react';
import RenderBadge from '../RenderBadge/RenderBadge';
import useRenderCount from '../../hooks/useRenderCount';
import type { DevBarProps } from '../../types/todo';
import styles from './DevBar.module.css';




const DevBar: React.FC<DevBarProps> = ({onSeed, onReset}) => {
    const renderCount = useRenderCount();
    return (
        <div className={styles.devBar}>
            <div>
                <RenderBadge count={renderCount}/>
            </div>
            <div className={styles.Buttons}>
            <button className={styles.devBarButton} onClick={() => {onSeed(100);}}>Seed 100 Todos</button>
            <button className={styles.devBarButton} onClick={() => {onSeed(1000);}}>Seed 1000 Todos</button>
            <button className={styles.devBarButton} onClick={() => {onSeed(5000);}}>Seed 5000 Todos</button>
            <button className={styles.devBarButton} onClick={() => {onReset();}}>Reset</button>
            </div>
        </div>
    );
};

export default DevBar;