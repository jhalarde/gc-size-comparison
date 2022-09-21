<template>
    <div class="flex flex-col items-center justify-content-center">
        <!-- buttons -->
        <div class="inline-flex">
            <button
                @click="comparison = 'Facing Up'"
                class="font-sans text-sm bg-white border-gray-200 border text-red-600 py-1 px-4"
                :class="buttonClass('Facing Up')"
            >
                Facing Up
            </button>
            <button
                @click="comparison = 'Back-to-Back'"
                class="font-sans text-sm bg-white border-gray-200 border text-red-600 py-1 px-4"
                :class="buttonClass('Back-to-Back')"
            >
                Back-to-Back
            </button>
            <button
                @click="comparison = 'Facing In'"
                class="font-sans text-sm bg-white border-gray-200 border text-red-600 py-1 px-4"
                :class="buttonClass('Facing In')"
            >
                Facing In
            </button>
        </div>

        <div
            class="overflow-y-hidden relative"
            :class="{
                'w-full overflow-x-scroll': baseContainerWidth > windowWidth,
            }"
            :style="{
                height: mainContainerHeight + 'px',
            }"
        >
            <div
                :style="{
                    width: baseContainerWidth + 'px',
                }"
            >
                <!--        <select v-model="comparison" style="margin-bottom: 25px">-->
                <!--            <option value="Facing Up">Facing Up</option>-->
                <!--            <option value="Back-to-Back">Back-to-Back</option>-->
                <!--            <option value="Facing In">Facing In</option>-->
                <!--        </select>-->
                <div
                    style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    "
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
        </div>
    </div>
</template>

<script setup>
import ImageCompare from './components/ImageCompare.vue'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

const props = defineProps({
    leftImageLeftUrl: String,
    leftImageRightUrl: String,
    leftImageLength: String,

    rightImageLeftUrl: String,
    rightImageRightUrl: String,
    rightImageLength: String,

    baseContainerClass: String,
})

const comparison = ref('Facing In')

const config = reactive({
    pixelsPerInch: 52,
    spaceAddend: 15,
    spacing: 0.3,
})

const leftImage = reactive({
    srcLeft: props.leftImageLeftUrl,
    srcRight: props.leftImageRightUrl,
    srcBack: null,
    rawLength: parseInt(props.leftImageLength),
    width: 0,
    height: 0,
})

const rightImage = reactive({
    srcLeft: props.rightImageLeftUrl,
    srcRight: props.rightImageRightUrl,
    srcBack: null,
    rawLength: parseInt(props.rightImageLength),
    width: 0,
    height: 0,
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
    return containerWidth * 2
})

const mainContainerHeight = computed(() => {
    if (comparison.value === 'Facing Up') {
        return (
            (Math.floor(defaultConfig.value.maxHeight) + 1) *
                config.pixelsPerInch +
            150
        )
    }

    return defaultConfig.value.maxImageHeight + 150
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

const leftImageLoaded = ({ width, height }) => {
    leftImage.width = width
    leftImage.height = height
}

const rightImageLoaded = ({ width, height }) => {
    rightImage.width = width
    rightImage.height = height
}

const buttonClass = (type) => {
    return {
        'hover:bg-red-600 hover:text-white': comparison.value !== type,
        'bg-red-600 text-white': comparison.value === type,
    }
}

let windowWidth = ref(window.innerWidth)

const onWidthChange = () => (windowWidth.value = window.innerWidth)

onMounted(() => {
    window.addEventListener('resize', onWidthChange)
})
onUnmounted(() => {
    window.removeEventListener('resize', onWidthChange)
})
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
