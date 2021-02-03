import { Tooltip, IntersectionDetector } from '@dhis2/ui'
import throttle from 'lodash/throttle'
import React from 'react'
// import PropTypes from 'prop-types'

/**
 * Notes:
 * For some reason, adding and removing event listeners somehow
 * makes the app register the 'mouse-out' better. Also canceling the
 * throttled function. Still, the delay is... delayed.
 *
 * It may be useful to expose a 'close instantly' function from the tooltip.
 * Or set the open/close delay.
 *
 * The 'height: 100%' is kinda problematic for styling.
 *
 * A tooltip persisting for longer than 400ms only happens when the mouse
 * reenters the triggering component (see Martin's last demo in the video)
 * - this is expected behavior, given the open/close delay
 *
 * Maybe use 'tooltip offset' for 'rootMargin'
 * - Also add rootMargin to IntersectionObserver
 *
 */

console.log('right throttle import', throttle)

// const scrollListener = throttle(console.log, 500)

function Home() {
    const rootRef = React.useRef(null)

    React.useEffect(() => {
        // const options = {
        //   root: rootRef.current,
        //   rootMargin: "0px",
        //   threshold: 1.0,
        // };
        // let observer = new IntersectionObserver(console.log, options);
        console.log("I'm an effect!")
        // rootRef.current.addEventListener('scroll', scrollListener)
        return () => {
            // rootRef.current.removeEventListener('scroll', scrollListener)
        }
    })

    const handleMouseOver = (onMouseOver /* onMouseOut */) => {
        return () => {
            console.log('mouse over')
            //   rootRef.current.addEventListener("scroll", scrollListener);
            onMouseOver()
        }
    }

    const handleMouseOut = (onMouseOver, onMouseOut) => {
        return () => {
            console.log('mouse out')
            //   rootRef.current.removeEventListener("scroll", scrollListener);
            //   scrollListener.cancel();
            onMouseOut()
        }
    }

    return (
        <div ref={rootRef}>
            <Tooltip content="tooltip content!" position="top">
                {({ onMouseOver, onMouseOut, ref }) => (
                    <p
                        onMouseOver={handleMouseOver(onMouseOver, onMouseOut)}
                        onMouseOut={handleMouseOut(onMouseOver, onMouseOut)}
                        ref={ref}
                    >
                        TEST Paragraph with a tooltip
                    </p>
                )}
            </Tooltip>
            {/* <div style={{ height: "auto" }}> */}
            <Tooltip content="tooltip content!" position="top">
                {args => (
                    <p {...args}>
                        <IntersectionDetector
                            rootRef={rootRef}
                            threshold={1.0}
                            onChange={({ isIntersecting }) => {
                                // 'true' when visible
                                console.log(isIntersecting)
                                if (!isIntersecting) {
                                    //   args.onMouseOut()
                                }
                            }}
                        >
                            Intersections observed here
                        </IntersectionDetector>
                    </p>
                )}
            </Tooltip>
            {/* </div> */}
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <Tooltip content="tooltip content!" position="top">
                {args => <p {...args}>Paragraph with a tooltip</p>}
            </Tooltip>
            <style jsx>
                {`
                    div {
                        height: 200px;
                        overflow: scroll;
                        padding: 1rem;
                        border: 1px solid #43cbcb;
                    }
                `}
            </style>
        </div>
    )
}

Home.propTypes = {}

export default Home
