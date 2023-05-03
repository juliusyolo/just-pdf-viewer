declare const _sfc_main: import("vue").DefineComponent<{
    width: {
        type: StringConstructor;
        required: true;
    };
    height: {
        type: StringConstructor;
        required: true;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    scalable: {
        type: BooleanConstructor;
        default: boolean;
    };
    rotatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    numPages: import("vue").Ref<number>;
    currentPage: import("vue").Ref<number>;
    rotationDeg: import("vue").Ref<number>;
    scale: import("vue").Ref<number>;
    rending: import("vue").Ref<boolean>;
    nextPage: () => void;
    previousPage: () => void;
    clockwiseRotation: () => void;
    counterclockwiseRotation: () => void;
    enlarge: () => void;
    shrink: () => void;
    pageNumberInput: (event: any) => void;
    pageNumberKeydown: (event: KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: StringConstructor;
        required: true;
    };
    height: {
        type: StringConstructor;
        required: true;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    scalable: {
        type: BooleanConstructor;
        default: boolean;
    };
    rotatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    scalable: boolean;
    rotatable: boolean;
    lazyLoad: boolean;
}>;
export default _sfc_main;
