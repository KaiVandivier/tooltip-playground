import { Tooltip, IntersectionDetector } from '@dhis2/ui'
import React from 'react'
import { Tooltip as CustomTooltip } from './CustomTooltip'

/**
 * Notes:
 *
 * Intersection observer / custom tooltip with 'close()' is working
 * - Issue: mousing over edge still opens the tooltip if the
 *   triggering component is half-exposed from edges
 * - Also, the tooltip popper still creeps outside the edges of the container
 */

function Home() {
    const rootRef = React.useRef(null)

    return (
        <div ref={rootRef} className="container">
            <Tooltip content="tooltip content!" position="top">
                {({ onMouseOver, onMouseOut, ref }) => (
                    <p
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                        ref={ref}
                    >
                        TEST Paragraph with a tooltip
                    </p>
                )}
            </Tooltip>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <div>
                <CustomTooltip content="tooltip content!" position="top">
                    {({ close, ...args }) => (
                        <IntersectionDetector
                            rootRef={rootRef}
                            threshold={1.0}
                            onChange={({ isIntersecting }) => {
                                // 'true' when 100% visible (due to threshold=1.0)
                                console.log({ isIntersecting })
                                if (!isIntersecting) {
                                    close()
                                }
                            }}
                        >
                            <div className="intersections-observed" {...args}>
                                Intersections observed + tooltip
                            </div>
                        </IntersectionDetector>
                    )}
                </CustomTooltip>
            </div>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <p>Test paragraph</p>
            <style jsx>
                {`
                    div.container {
                        height: 300px;
                        overflow: scroll;
                        padding: 1rem;
                        border: 1px solid #43cbcb;
                    }

                    div.intersections-observed {
                        height: 80px;
                        padding: 1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid grey;
                    }
                `}
            </style>
        </div>
    )
}

Home.propTypes = {}

export default Home
