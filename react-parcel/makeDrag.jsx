import Draggable from 'react-draggable'
import React, { Component } from 'react'

export default function(ComponentMake) {
    return class extends Component {
        render() {
            const { axis, handle, defaultPosition, position, grid, handleStart, handleDrag, handleStop, styled, ...rest } = this.props
            console.log(defaultPosition)
            return (
                <Draggable
                    axis={axis}
                    handle={handle}
                    defaultPosition={defaultPosition}
                    position={position}
                    grid={grid}
                    onStart={handleStart}
                    onDrag={handleDrag}
                    onStop={handleStop}>
                        <div style={styled}>
                            <ComponentMake
                                {...this.state}
                                {...rest} />
                        </div>
                </Draggable>
            )
        }
    }
}
