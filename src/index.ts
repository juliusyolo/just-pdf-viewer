import { App } from 'vue';
import _pdfViewer from "./pdf-viewer.vue";
import {Plugin} from "@vue/runtime-core";

const PdfViewer = Object.assign(_pdfViewer, {
    install: (app: App) => {
        app.component('just-pdf-viewer', _pdfViewer);
    },
});

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        // @ts-ignore
        JustPdfViewer: typeof PdfViewer;
    }
}

export type PdfViewerInstance = InstanceType<typeof _pdfViewer>;

export default PdfViewer;
