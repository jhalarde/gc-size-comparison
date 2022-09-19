<template>
    <div :style="containerStyle">
        <canvas ref="ruler" :id="elemId" resize></canvas>
    </div>
</template>

<script setup>
import paper from 'paper'
import { computed, onMounted, ref, watch } from 'vue'

const elemId = computed(() => {
    return '#' + props.position + 'Ruler'
})

const props = defineProps({
    image: Object,
    axis: String,
    position: String,
    comparison: String,
    xWidth: Number,
    xHeight: Number,
    yWidth: Number,
    yHeight: Number,
    imageLoaded: Boolean,
})

const ruler = ref(null)

const config = computed(() => {
    return {
        pixelsPerInch: 72,
        spaceAddend: 15,
        subUnitBase: 2,
        subUnitExponent: 2,
        levelToLevelMultiplier: 0.5,
        ticksPerUnit: Math.pow(2, 2),
        masterTickQty: Math.pow(2, 2) * props.xWidth,
        rulerWidth: Math.round(15 + 0.3 * 72),
    }
})

const containerStyle = computed(() => {
    let facingUpStyles = {
        left: {
            x: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                height: `${config.value.rulerWidth}px`,
                transform: `translateX(-${config.value.rulerWidth}px)`,
            },
            y: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: `${config.value.rulerWidth}px`,
                transform: `translateY(-${config.value.rulerWidth}px)`,
            },
        },
        right: {
            x: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: `${config.value.rulerWidth}px`,
                transform: `translateX(${config.value.rulerWidth}px)`,
            },
            y: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: `${config.value.rulerWidth}px`,
                transform: `translateY(-${config.value.rulerWidth}px)`,
            },
        },
    }

    let backToBackStyles = {
        left: {
            x: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                height: `${config.value.rulerWidth}px`,
                transform: `translateX(-${config.value.rulerWidth}px)`,
            },
            y: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: `${config.value.rulerWidth}px`,
                transform: `translateY(-${config.value.rulerWidth}px)`,
            },
        },
        right: {
            x: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                height: `${config.value.rulerWidth}px`,
                transform: `translateX(-${config.value.rulerWidth}px)`,
            },
            y: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: `${config.value.rulerWidth}px`,
                transform: `translateY(-${config.value.rulerWidth}px)`,
            },
        },
    }

    let facingInStyles = {
        left: {
            x: {
                position: 'absolute',
                top: 0,
                left: 0,
                height: `${config.value.rulerWidth}px`,
                transform: `translateX(${config.value.rulerWidth}px)`,
            },
            y: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${config.value.rulerWidth}px`,
                transform: `translateY(${config.value.rulerWidth}px)`,
            },
        },
        right: {
            x: {
                position: 'absolute',
                top: 0,
                right: 0,
                height: `${config.value.rulerWidth}px`,
                transform: `translateX(-${config.value.rulerWidth}px)`,
            },
            y: {
                position: 'absolute',
                top: 0,
                right: 0,
                width: `${config.value.rulerWidth}px`,
                transform: `translateY(${config.value.rulerWidth}px)`,
            },
        },
    }

    let style = { left: { x: {}, y: {} }, right: { x: {}, y: {} } }

    if (props.comparison === 'Facing Up') {
        style = facingUpStyles
    }

    if (props.comparison === 'Back-to-Back' || props.comparison === 'Back') {
        style = backToBackStyles
    }

    if (props.comparison === 'Facing In') {
        style = facingInStyles
    }

    return style[props.position][props.axis]
})

const constructRuler = () => {
    let tickArray = []
    let masterTickIndex = 0

    for (
        let exponentIndex = 0;
        exponentIndex <= config.value.subUnitExponent;
        exponentIndex++
    ) {
        let tickQty = Math.floor(
            (props.axis === 'x' ? props.xWidth : props.yHeight) *
                Math.pow(config.value.subUnitBase, exponentIndex)
        )

        let highestTickDenominatorMultiplier =
            config.value.ticksPerUnit /
            Math.pow(config.value.subUnitBase, exponentIndex)

        for (let tickIndex = 0; tickIndex <= tickQty; tickIndex++) {
            masterTickIndex = highestTickDenominatorMultiplier * tickIndex

            let tickHeight =
                props.xHeight *
                config.value.pixelsPerInch *
                Math.pow(config.value.levelToLevelMultiplier, exponentIndex)

            let tickWidth =
                props.yWidth *
                config.value.pixelsPerInch *
                Math.pow(config.value.levelToLevelMultiplier, exponentIndex)

            let tickSpacing =
                config.value.pixelsPerInch /
                Math.pow(config.value.subUnitBase, exponentIndex)

            let finalTick = tickIndex === tickQty

            let x1 = tickSpacing * tickIndex
            let x2 = x1
            let y1 = 0
            let y2 = tickHeight

            if (props.axis === 'y') {
                x1 =
                    props.position === 'left'
                        ? 0
                        : props.yWidth * config.value.pixelsPerInch +
                          config.value.spaceAddend
                x2 = props.position === 'left' ? tickWidth : x1 - tickWidth
                y1 = tickSpacing * tickIndex
                y2 = y1
            }

            if (['Facing In'].includes(props.comparison)) {
                if (props.axis === 'y') {
                    x1 =
                        props.position === 'left'
                            ? props.yWidth * config.value.pixelsPerInch +
                              config.value.spaceAddend
                            : 0
                    x2 = props.position === 'left' ? x1 - tickWidth : tickWidth
                    y1 = tickSpacing * tickIndex
                    y2 = y1
                }

                if (props.axis === 'x') {
                    x1 = tickSpacing * tickIndex
                    x2 = x1
                    y1 =
                        props.yWidth * config.value.pixelsPerInch +
                        config.value.spaceAddend
                    y2 = y1 - tickHeight
                }
            }

            if (tickArray[masterTickIndex] === undefined) {
                let point1 = new paper.Point(x1, y1)
                let point2 = new paper.Point(x2, y2)
                let line = new paper.Path.Line(point1, point2) //actual line instance

                line.strokeColor = 'black' //color of ruler line
                line.strokeWidth = '1' //width of ruler line in pixels

                tickArray[masterTickIndex] = true //register the tick so it is not duplicated
                if (exponentIndex === 0) {
                    if (props.axis === 'x') {
                        xRulerTextSetup(x1, y2, finalTick, tickIndex, tickQty)
                    }

                    if (props.axis === 'y') {
                        yRulerTextSetup(x2, y1, tickIndex, tickQty)
                    }
                }
            }
        }
    }

    paper.view.draw()
}

const yRulerTextSetup = (x, y, tickIndex, tickQty) => {
    let xLabelOffset = props.position === 'left' ? -10 : 4
    let yLabelOffset = 1
    if (tickIndex === 0) {
        yLabelOffset = 15
    } else {
        yLabelOffset = -5
    }
    let text = new paper.PointText(
        new paper.Point(x + xLabelOffset, y + yLabelOffset)
    )
    text.justification = 'left'
    text.fillColor = 'black'
    text.content = tickIndex

    if (['Facing Up', 'Back-to-Back', 'Back'].includes(props.comparison)) {
        text.content = Math.abs(Math.floor(tickIndex - tickQty))
    }

    text.style = {
        fontFamily: 'monospace',
        fontSize: 14,
    }
}

const xRulerTextSetup = (x, y, finalTick, tickIndex, tickQty) => {
    let xLabelOffset = 4
    let yLabelOffset = 10
    if (finalTick) {
        xLabelOffset = -1 * xLabelOffset
    } //last label is right justified
    let text = new paper.PointText(
        new paper.Point(x + xLabelOffset, y + yLabelOffset)
    )
    text.justification = 'left'
    if (finalTick) {
        text.justification = 'right'
    } //last label is right justified
    text.fillColor = 'black'
    text.content =
        props.position === 'left'
            ? tickIndex
            : Math.abs(Math.floor(tickIndex - tickQty))

    if (['Facing Up', 'Back-to-Back', 'Back'].includes(props.comparison)) {
        text.content =
            props.position === 'left'
                ? Math.abs(Math.floor(tickIndex - tickQty))
                : tickIndex
    }

    text.style = {
        fontFamily: 'monospace',
        fontSize: 14,
    }
}

const setupRulerSize = () => {
    ruler.value.width = Math.round(props.xWidth * config.value.pixelsPerInch)
    ruler.value.height = Math.round(
        props.xHeight * config.value.pixelsPerInch + config.value.spaceAddend
    )

    if (props.axis === 'y') {
        ruler.value.width = Math.round(
            props.yWidth * config.value.pixelsPerInch + config.value.spaceAddend
        )
        ruler.value.height = Math.round(
            props.yHeight * config.value.pixelsPerInch
        )
    }
}

onMounted(() => {
    // console.log(props)
})

watch(
    () => props.imageLoaded,
    (imageLoaded) => {
        if (imageLoaded) {
            paper.setup(ruler.value)

            setupRulerSize()

            constructRuler()
        }
    }
)

watch(
    () => props.comparison,
    () => {
        if (props.imageLoaded) {
            paper.setup(ruler.value)

            setupRulerSize()

            constructRuler()
        }
    }
)
</script>
