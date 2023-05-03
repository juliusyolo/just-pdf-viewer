<template>
    <div class="pdf-container" :style="{height,width}">
        <div class="tool-bar">
            <span :class="currentPage === 1||rending?'btn-disable':'btn'" @click="previousPage"><svg focusable="false"
                                                                                                     class=""
                                                                                                     data-icon="left"
                                                                                                     width="1em"
                                                                                                     height="1em"
                                                                                                     fill="currentColor"
                                                                                                     aria-hidden="true"
                                                                                                     viewBox="64 64 896 896"><path
                d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></span>
            <span class="indicator-text">
                {{currentPage}}/{{
                    numPages
                }}</span>
            <span :class="currentPage === numPages||rending?'btn-disable':'btn'" @click="nextPage"><svg
                focusable="false" class="" data-icon="right" width="1em"
                height="1em" fill="currentColor" aria-hidden="true"
                viewBox="64 64 896 896"><path
                d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span>
            <span class="btn" @click="counterclockwiseRotation" v-if="rotatable"><svg focusable="false" class=""
                                                                                      data-icon="rotate-left"
                                                                                      width="1em" height="1em"
                                                                                      fill="currentColor"
                                                                                      aria-hidden="true"
                                                                                      viewBox="64 64 896 896"><path
                d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"></path><path
                d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"></path></svg></span>
            <span class="btn" @click="clockwiseRotation" v-if="rotatable"><svg focusable="false" class=""
                                                                               data-icon="rotate-right"
                                                                               width="1em" height="1em"
                                                                               fill="currentColor"
                                                                               aria-hidden="true"
                                                                               viewBox="64 64 896 896"><path
                d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"></path><path
                d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"></path></svg></span>
            <span :class="scale === 1?'btn-disable':'btn'" @click="shrink" v-if="scalable"><svg
                focusable="false"
                class=""
                data-icon="zoom-out"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                viewBox="64 64 896 896"><path
                d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path></svg></span>
            <span class="indicator-text" v-if="scalable">{{ scale * 100 }}%</span>
            <span :class="scale === 4?'btn-disable':'btn'" @click="enlarge" v-if="scalable"><svg
                focusable="false"
                class=""
                data-icon="zoom-in"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                viewBox="64 64 896 896"><path
                d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path></svg>
            </span>
        </div>

        <div class="pdf-canvas" id="pdf-canvas">
            <canvas :style="{transform: `rotate(${rotationDeg}deg)`}" v-for="index in (lazyLoad?1:numPages)"
                    :id="`pdf-page-canvas-${index}`" class="pdf-page-canvas"></canvas>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watch} from 'vue'
import {getDocument, GlobalWorkerOptions, PDFDocumentProxy, PDFPageProxy, RenderTask} from 'pdfjs-dist';
//@ts-ignore
import pdfJsWorker from 'pdfjs-dist/build/pdf.worker.entry';

export default defineComponent({
    name: 'pdf-viewer',
    props: {
        width: {
            type: String,
            required: true
        },
        height: {
            type: String,
            required: true
        },
        src: {
            type: String || URL || Int8Array || Uint8Array
                || Uint8ClampedArray || Int16Array || Uint16Array || Int32Array
                || Uint32Array || Float32Array || Float64Array || ArrayBuffer
                || Object,
            required: true
        },
        scalable: {
            type: Boolean,
            default: true
        },
        rotatable: {
            type: Boolean,
            default: true
        },
        lazyLoad: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const numPages = ref<number>(0)
        const currentPage = ref<number>(0)
        const rotationDeg = ref<number>(0)
        const scale = ref<number>(1.5)
        const rending = ref<boolean>(false)
        const canvasHeight = ref<number>(0)
        const renderTaskMap = new Map<number, RenderTask | undefined>()
        const pageCacheMap = new Map<number, PDFPageProxy>()
        let pdf: PDFDocumentProxy;
        onMounted(() => {
            GlobalWorkerOptions.workerSrc = pdfJsWorker
            getDocument(props.src).promise.then(doc => {
                pdf = doc
                numPages.value = pdf.numPages
                if (props.lazyLoad) {
                    if (numPages.value >= 1) {
                        currentPage.value = 1
                        getPdfPage(currentPage.value)
                    }
                } else {
                    currentPage.value = 1
                    getAllPages()
                }
            }).catch(err => {
                throw err;
            })
            const e = document.getElementById('pdf-canvas') as HTMLElement
            e.onscroll = () => {
                if (!props.lazyLoad) {
                    currentPage.value = Math.floor(e.scrollTop / canvasHeight.value) + 1
                    if (Math.ceil(e.scrollTop) >= e.scrollHeight - e.offsetHeight) {
                        currentPage.value = numPages.value
                    }
                }
            }
        })
        watch(() => props.lazyLoad, (newVal, oldValue) => {
            if (newVal) {
                getPdfPage(currentPage.value)
            } else {
                for (let i = 1; i <= numPages.value - 1; i++) {
                    getPdfPage(i)
                }
                getPdfPage(numPages.value, () => {
                    scrollToCorrectPage()
                })
            }
        })
        watch(() => props.rotatable, (newVal, oldValue) => {
            if (!newVal) {
                rotationDeg.value = 0
            }
        })
        watch(() => props.scalable, (newVal, oldValue) => {
            if (!newVal) {
                scale.value = 1.5
                if (props.lazyLoad) {
                    if (numPages.value >= 1) {
                        getPdfPage(currentPage.value)
                    }
                } else {
                    getAllPages()
                }
            }
        })
        const getPdfPage = (pageNumber: number, fn = () => {
        }) => {
            rending.value = true
            pdf.getPage(pageNumber).then(page => {
                const viewport = page.getViewport({scale: scale.value})
                const canvas: HTMLCanvasElement = document.getElementById(props.lazyLoad ? 'pdf-page-canvas-1' : `pdf-page-canvas-${pageNumber}`) as HTMLCanvasElement
                console.log("canvas",canvas)
                const outputScale = window.devicePixelRatio || 1;
                canvas.width = Math.floor(viewport.width * outputScale);
                canvas.height = Math.floor(viewport.height * outputScale);
                canvas.style.width = Math.floor(viewport.width) + "px";
                canvas.style.height = Math.floor(viewport.height) + "px";
                canvasHeight.value = Math.floor(viewport.height)
                const canvasContext: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
                const transform = outputScale !== 1
                    ? [outputScale, 0, 0, outputScale, 0, 0]
                    : undefined;
                const renderTask = page.render({canvasContext, viewport, transform})
                if (renderTaskMap.has(pageNumber)) {
                    const existedTask = renderTaskMap.get(pageNumber)
                    if (existedTask) {
                        existedTask.cancel()
                    }
                }
                renderTaskMap.set(pageNumber, renderTask)
                renderTask.promise
                    .then(() => {
                        rending.value = false
                        fn()
                    })
                    .catch(err => {
                        rending.value = false
                        throw err;
                    })
            }).catch(err => {
                rending.value = false
                throw err;
            })
        }
        const getAllPages = (fn = () => {
        }) => {
            for (let i = 1; i <= numPages.value - 1; i++) {
                getPdfPage(i, fn)
            }
            getPdfPage(numPages.value, () => {
                fn()
                scrollToCorrectPage()
            })
        }
        const scrollToCorrectPage = () => {
            const e = document.getElementById('pdf-canvas') as HTMLElement
            e.scroll(
                {top: (currentPage.value - 1) * (canvasHeight.value + 10)}
            )
        }
        const previousPage = () => {
            if (currentPage.value > 1) {
                if (props.lazyLoad) {
                    currentPage.value = currentPage.value - 1
                    getPdfPage(currentPage.value)
                } else {
                    currentPage.value = currentPage.value - 1
                    scrollToCorrectPage()
                }
            }
        }

        const nextPage = () => {
            if (currentPage.value <= numPages.value - 1) {
                if (props.lazyLoad) {
                    currentPage.value = currentPage.value + 1
                    getPdfPage(currentPage.value)
                } else {
                    currentPage.value = currentPage.value + 1
                    scrollToCorrectPage()
                }
            }
        }
        const clockwiseRotation = () => {
            rotationDeg.value = rotationDeg.value + 90
        }
        const counterclockwiseRotation = () => {
            rotationDeg.value = rotationDeg.value - 90
        }
        const enlarge = () => {
            if (scale.value < 4) {
                scale.value = scale.value + 0.5
                if (props.lazyLoad) {
                    getPdfPage(currentPage.value)
                } else {
                    getAllPages()
                }
            }
        }
        const shrink = () => {
            if (scale.value > 1) {
                scale.value = scale.value - 0.5
                if (props.lazyLoad) {
                    getPdfPage(currentPage.value)
                } else {
                    getAllPages()
                }
            }
        }
        const pageNumberInput = (event: any) => {
            console.log(event)
        }
        const pageNumberKeydown = (event: KeyboardEvent) => {
            if (event.code === 'Enter') {
                console.log(event)
            }
        }
        return {
            numPages,
            currentPage,
            rotationDeg,
            scale,
            rending,
            nextPage,
            previousPage,
            clockwiseRotation,
            counterclockwiseRotation,
            enlarge,
            shrink,
            pageNumberInput,
            pageNumberKeydown
        }
    }
})
</script>

<style lang="less" scoped>
.pdf-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .tool-bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 32px;
        width: 100%;
        background: rgba(0, 0, 0, .1);
        margin-bottom: 10px;

        .indicator-text {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-left: 5px;
        }

        .btn {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 32px;
            margin-left: 5px;
            cursor: pointer;
        }

        .btn:hover {
            background: #ffffff40;;
        }

        .btn-disable {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 32px;
            margin-left: 5px;
            color: #ffffff40;;
            pointer-events: none;
        }

        .btn-disable:hover {
            background: rgba(0, 0, 0, .1);

        }
    }

    .pdf-canvas {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        overflow: auto;
        width: 100%;
        height: calc(100% - 42px);

        .pdf-page-canvas {
            margin-bottom: 10px;
            transition: transform .3s cubic-bezier(.215, .61, .355, 1) 0s;
        }
    }

}
</style>
