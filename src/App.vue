<template>
    <div
        :style="{
            width: baseContainerWidth,
        }"
    >
        <!--        <select v-model="comparison" style="margin-bottom: 25px">-->
        <!--            <option value="Facing Up">Facing Up</option>-->
        <!--            <option value="Back-to-Back">Back-to-Back</option>-->
        <!--            <option value="Facing In">Facing In</option>-->
        <!--        </select>-->
        <div
            style="display: flex; align-items: center; justify-content: center"
        >
            <ImageCompare
                :style="{
                    height: defaultConfig.containerHeight,
                    position: 'relative',
                    width: defaultConfig.containerWidth,
                }"
                position="left"
                :comparison="comparison"
                :image="leftImage"
                :maxLength="defaultConfig.maxLength"
                :config="config"
                @imageLoaded="leftImageLoaded"
            ></ImageCompare>

            <ImageCompare
                :style="{
                    height: defaultConfig.containerHeight,
                    position: 'relative',
                    width: defaultConfig.containerWidth,
                }"
                position="right"
                :comparison="comparison"
                :image="rightImage"
                :maxLength="defaultConfig.maxLength"
                :config="config"
                @imageLoaded="rightImageLoaded"
            ></ImageCompare>
        </div>
    </div>
</template>

<script setup>
import ImageCompare from './components/ImageCompare.vue'
import { computed, onMounted, reactive, ref } from 'vue'

const props = defineProps({
    comparison: {
        type: String,
        required: true,
        default: 'Facing Up', // Facing Up, Back-to-Back, Facing In, Back
    },
})

const comparison = ref(props.comparison || 'Facing In')

const config = reactive({
    pixelsPerInch: 52,
    spaceAddend: 15,
    spacing: 0.3,
})

const baseContainerWidth = computed(() => {
    let containerWidth =
        (Math.floor(defaultConfig.value.maxHeight) + 1) * config.pixelsPerInch +
        100

    if (comparison.value === 'Facing Up') {
        containerWidth =
            Math.ceil(defaultConfig.value.maxImageHeight) +
            (config.spacing * config.pixelsPerInch + config.spaceAddend) +
            100
    }
    return containerWidth * 2 + 'px'
})

const defaultConfig = computed(() => {
    const maxHeight =
        leftImage.rawLength > rightImage.rawLength
            ? leftImage.rawLength
            : rightImage.rawLength

    let maxImageHeight =
        leftImage.height > rightImage.height
            ? leftImage.height
            : rightImage.height

    let maxImageWidth =
        leftImage.width > rightImage.width ? leftImage.width : rightImage.width

    let maxLength = maxHeight + 1

    // default for 'Facing Up'
    let containerHeight =
        Math.ceil(maxImageHeight) +
        (config.spacing * config.pixelsPerInch + config.spaceAddend) +
        100 +
        'px'
    let containerWidth =
        (Math.floor(maxHeight) + 1) * config.pixelsPerInch + 100 + 'px'

    if (comparison.value === 'Facing Up') {
        containerHeight =
            (Math.floor(maxHeight) + 1) * config.pixelsPerInch + 100 + 'px'

        containerWidth =
            Math.ceil(maxImageHeight) +
            (config.spacing * config.pixelsPerInch + config.spaceAddend) +
            100 +
            'px'
    }

    return {
        pixelsPerInch: config.pixelsPerInch,
        spaceAddend: config.spaceAddend,
        maxHeight,
        containerHeight: containerHeight,
        containerWidth: containerWidth,
        maxLength,
        maxImageHeight,
    }
})

const leftImage = reactive({
    src: 'https://img.handgunhero.com/live/handgun/134398/c/G17-lg-1024.png',
    srcLeft:
        'https://img.handgunhero.com/live/handgun/134398/c/G17-lg-1024.png',
    srcRight:
        'https://img.handgunhero.com/live/handgun/134399/c/G17-(1)-lg-1024.png',
    srcBack: 'https://img.handgunhero.com/live/handgun/134328/c/G17-sm-240.jpg',
    rawLength: 8.03,
    width: 0,
    height: 0,
})

const rightImage = reactive({
    src: 'https://img.handgunhero.com/live/handgun/134282/c/365xl-9-bxr3-right-lg-1024.png',
    srcLeft:
        'https://img.handgunhero.com/live/handgun/134264/c/p365xl-left-lg-1024.png',
    srcRight:
        'https://img.handgunhero.com/live/handgun/134282/c/365xl-9-bxr3-right-lg-1024.png',
    srcBack:
        'https://img.handgunhero.com/live/handgun/134334/c/365xl-back-sm-240.jpg',
    rawLength: 6.6,
    width: 0,
    height: 0,
})

const leftImageLoaded = ({ width, height }) => {
    leftImage.width = width
    leftImage.height = height
}

const rightImageLoaded = ({ width, height }) => {
    rightImage.width = width
    rightImage.height = height
}

onMounted(() => {
    console.log()
})
</script>
