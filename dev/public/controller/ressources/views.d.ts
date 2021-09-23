export declare type viewVariants = 'Intro' | 'Typescript' | 'Webcomponents' | 'StateManagement' | 'Azure' | 'Spring' | 'DevOps' | 'Node';
declare type ViewType = {
    [key in viewVariants]: any[];
};
interface TextTitle {
    text: string;
    title: string;
    link?: string;
    linkText?: string;
    linkTarget?: string;
}
export declare const leftSideText: (props: TextTitle) => {
    component: string;
    props: never[];
    innerText: string;
    slots: {
        slotName: string;
        component: string;
        props: never[];
        slots: {
            slotName: string;
            component: string;
            props: never[];
            slots: ({
                slotName: string;
                component: string;
                props: never[];
                innerText: string;
                slots: ({
                    slotName: string;
                    component: string;
                    props: ({
                        width: string;
                        polygon?: undefined;
                    } | {
                        polygon: boolean;
                        width?: undefined;
                    })[];
                    innerText: string;
                    slots: {
                        slotName: string;
                        component: string;
                        props: ({
                            event: string;
                            icon?: undefined;
                        } | {
                            icon: string;
                            event?: undefined;
                        })[];
                        innerText: string;
                        slots: {
                            slotName: string;
                            component: string;
                            props: {
                                styling: string;
                            }[];
                            innerText: string;
                            slots: never[];
                        }[];
                    }[];
                } | {
                    slotName: string;
                    component: string;
                    props: {
                        width: string;
                    }[];
                    innerText: string;
                    slots: ({
                        slotName: string;
                        component: string;
                        props: {
                            level: string;
                        }[];
                        innerText: string;
                        slots: never[];
                    } | {
                        slotName: string;
                        component: string;
                        props: ({
                            href: string | undefined;
                            icon?: undefined;
                            target?: undefined;
                        } | {
                            icon: string | undefined;
                            href?: undefined;
                            target?: undefined;
                        } | {
                            target: string | undefined;
                            href?: undefined;
                            icon?: undefined;
                        })[];
                        innerText: string | undefined;
                        slots: never[];
                    })[];
                })[];
            } | {
                slotName: string;
                component: string;
                props: never[];
                slots: {
                    slotName: string;
                    component: string;
                    props: never[];
                    slots: ({
                        slotName: string;
                        component: string;
                        props: {
                            level: number;
                        }[];
                        innerText: string;
                        slots: never[];
                    } | {
                        slotName: string;
                        component: string;
                        props: {
                            styling: string;
                        }[];
                        innerText: string;
                        slots: never[];
                    } | {
                        slotName: string;
                        component: string;
                        props: ({
                            href: string;
                            icon?: undefined;
                            target?: undefined;
                        } | {
                            icon: string;
                            href?: undefined;
                            target?: undefined;
                        } | {
                            target: string;
                            href?: undefined;
                            icon?: undefined;
                        })[];
                        innerText: string;
                        slots: never[];
                    })[];
                }[];
                innerText?: undefined;
            })[];
        }[];
    }[];
}[];
export declare const Views: ViewType;
export {};
//# sourceMappingURL=views.d.ts.map