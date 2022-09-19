<template>
    <div>
        <image-ruler
            axis="x"
            :position="position"
            :comparison="comparison"
            :x-width="config.xWidth"
            :x-height="config.xHeight"
            :y-width="config.yWidth"
            :y-height="config.yHeight"
            :image-loaded="imageLoaded"
            :config="props.config"
        ></image-ruler>

        <img ref="image" id="image" @load="onImageLoad" />

        <image-ruler
            axis="y"
            :position="position"
            :comparison="comparison"
            :x-width="config.xWidth"
            :x-height="config.xHeight"
            :y-width="config.yWidth"
            :y-height="config.yHeight"
            :image-loaded="imageLoaded"
            :config="props.config"
        ></image-ruler>
    </div>
</template>

<script setup>
import ImageRuler from './ImageRuler.vue'
import { computed, onMounted, reactive, ref, watch } from 'vue'

const image = ref(null)
const props = defineProps({
    position: String,
    comparison: String,
    image: Object,
    maxLength: Number,
    config: Object,
})

const imageLoaded = ref(false)

const config = reactive({
    pixelsPerInch: props.config.pixelsPerInch || 72,
    spaceAddend: 15,
    xWidth: 0.3,
    xHeight: 0.3,
    yWidth: 0.3,
    yHeight: 0.3,
    rulerWidth: Math.round(15 + 0.3 * props.config.pixelsPerInch),
})

const imageConfig = computed(() => {
    return {
        width: props.image.rawLength * config.pixelsPerInch,
    }
})

const setupRulerXYWidthHeight = () => {
    if (['Facing Up'].includes(props.comparison)) {
        config.xWidth = Math.round(image.value.height / config.pixelsPerInch)
        config.yHeight = Math.round(props.maxLength)
    }
    if (['Back-to-Back', 'Facing In', 'Back'].includes(props.comparison)) {
        config.xWidth = Math.round(props.maxLength)
        config.yHeight = Math.round(image.value.height / config.pixelsPerInch)
    }
}

const emit = defineEmits(['imageLoaded'])

const onImageLoad = () => {
    imageLoaded.value = true
    setupRulerXYWidthHeight()
    emit('imageLoaded', image.value)

    setImageStyles()
}

const setImageStyles = () => {
    image.value.style.position = 'absolute'

    if (['Facing Up', 'Back-to-Back', 'Back'].includes(props.comparison)) {
        let translateX =
            (image.value.width - image.value.height) / 2 - config.rulerWidth
        let translateY =
            (image.value.height - image.value.width) / 2 - config.rulerWidth

        image.value.style.bottom = 0
        image.value.style.top = 'auto'

        if (props.position === 'left') {
            image.value.style.right = 0
            image.value.style.left = 'auto'

            if (props.comparison === 'Facing Up') {
                image.value.style.transform = `translate(${translateX}px, ${translateY}px) rotate(90deg)`
            }

            if (
                props.comparison === 'Back-to-Back' ||
                props.comparison === 'Back'
            ) {
                image.value.style.transform = `translate(-${config.rulerWidth}px, -${config.rulerWidth}px)`
            }
        }

        if (props.position === 'right') {
            image.value.style.left = 0
            image.value.style.right = 'auto'

            if (props.comparison === 'Facing Up') {
                image.value.style.transform = `translate(-${translateX}px, ${translateY}px) rotate(-90deg)`
            }

            if (props.comparison === 'Back-to-Back') {
                image.value.style.transform = `translate(${config.rulerWidth}px, -${config.rulerWidth}px)`
            }
        }
    }

    if (['Facing In'].includes(props.comparison)) {
        image.value.style.top = 0
        image.value.style.bottom = 'auto'

        if (props.position === 'left') {
            image.value.style.left = 0
            image.value.style.right = 'auto'
            image.value.style.transform = `translate(${config.rulerWidth}px, ${config.rulerWidth}px)`
        }

        if (props.position === 'right') {
            image.value.style.right = 0
            image.value.style.left = 'auto'
            image.value.style.transform = `translate(-${config.rulerWidth}px, ${config.rulerWidth}px)`
        }
    }
}

const setupImageSrc = (comparison) => {
    if (['Facing Up', 'Back-to-Back'].includes(comparison)) {
        if (props.position === 'left') {
            image.value.src = props.image.srcLeft
        }
        if (props.position === 'right') {
            image.value.src = props.image.srcRight
        }
    }

    if (comparison === 'Facing In') {
        if (props.position === 'left') {
            image.value.src = props.image.srcRight
        }
        if (props.position === 'right') {
            image.value.src = props.image.srcLeft
        }
    }

    if (comparison === 'Back') {
        image.value.src = props.image.srcBack
    }
}

onMounted(() => {
    setupImageSrc(props.comparison)
    image.value.width = imageConfig.value.width
})

watch(
    () => props.comparison,
    (comparison) => {
        setupRulerXYWidthHeight()
        setupImageSrc(comparison)
    }
)
</script>
