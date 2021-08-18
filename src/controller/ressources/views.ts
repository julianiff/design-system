export type viewVariants =
  | 'Intro'
  | 'Typescript'
  | 'Webcomponents'
  | 'StateManagement'
  | 'Azure'
  | 'Spring'
  | 'DevOps'
  | 'Node';

type ViewType = {
  [key in viewVariants]: any[];
};

interface TextTitle {
  text: string;
  title: string;
  link?: string;
  linkText?: string;
  linkTarget?: string;
}

export const leftSideText = (props: TextTitle) => [
  {
    component: 'iff-page-layout',
    props: [],
    innerText: '',
    slots: [
      {
        slotName: 'body',
        component: 'iff-row-layout',
        props: [],
        slots: [
          {
            slotName: '',
            component: 'iff-split',
            props: [],
            slots: [
              {
                slotName: 'start-text',
                component: 'iff-title-lead',
                props: [],
                innerText: 'What I like',
                slots: [
                  {
                    slotName: 'lead-text',
                    component: 'iff-grid-item',
                    props: [{width: 'slim'}, {polygon: true}],
                    innerText: '',
                    slots: [
                      {
                        slotName: '',
                        component: 'iff-icon-text',
                        props: [{event: 'Intro'}, {icon: 'start'}],
                        innerText: '',
                        slots: [
                          {
                            slotName: '',
                            component: 'iff-text',
                            props: [{styling: 'paragraph'}],
                            innerText: 'Overview',
                            slots: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    slotName: 'lead-text',
                    component: 'iff-grid-item',
                    props: [{width: 'slim'}],
                    innerText: '',
                    slots: [
                      {
                        slotName: '',
                        component: 'iff-title',
                        props: [{level: '4'}],
                        innerText: props.title,
                        slots: [],
                      },
                      {
                        slotName: '',
                        component: 'iff-text',
                        props: [],
                        innerText: props.text,
                        slots: [],
                      },
                      {
                        slotName: '',
                        component: 'iff-icon-text',
                        props: [
                          {href: props.link},
                          {icon: props.link && 'end'},
                          {target: props.linkTarget},
                        ],
                        innerText: props.linkText,
                        slots: [],
                      },
                    ],
                  },
                ],
              },
              {
                slotName: 'end-text',
                component: 'iff-animated-container',
                props: [],
                slots: [
                  {
                    slotName: '',
                    component: 'iff-title-lead',
                    props: [],
                    slots: [
                      {
                        slotName: 'title',
                        component: 'iff-title',
                        props: [{level: 2}],
                        innerText: 'Who am I',
                        slots: [],
                      },
                      {
                        slotName: 'lead-text',
                        component: 'iff-text',
                        props: [{styling: 'paragraph'}],
                        innerText:
                          'My name is Julian Iff, I am a Software Engineer and with great enthusiasm, I create new digital products and features that transform how users achieve their goals. I strive to extend my knowledge in all areas of software engineering.',
                        slots: [],
                      },
                      {
                        slotName: 'lead-text',
                        component: 'iff-text',
                        props: [{styling: 'paragraph'}],
                        innerText:
                          'I work in both front- and backend with a dose of pipelines and build processes.',
                        slots: [],
                      },
                      {
                        slotName: 'lead-text',
                        component: 'iff-icon-text',
                        props: [
                          {
                            href: 'https://www.linkedin.com/in/julian-iff-36882661/',
                          },
                          {icon: 'end'},
                          {target: '_blank'},
                        ],
                        innerText: 'Get in Touch!',
                        slots: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const Views: ViewType = {
  Intro: [
    {
      component: 'iff-page-layout',
      props: [],
      innerText: '',
      slots: [
        {
          slotName: 'body',
          component: 'iff-row-layout',
          props: [],
          slots: [
            {
              slotName: '',
              component: 'iff-split',
              props: [],
              slots: [
                {
                  slotName: 'start-text',
                  component: 'iff-title-lead',
                  props: [],
                  innerText: '',
                  slots: [
                    {
                      slotName: 'title',
                      component: 'iff-title',
                      props: [{level: 2}],
                      innerText: 'What I like',
                      slots: [],
                    },
                    {
                      slotName: 'lead-text',
                      component: 'iff-button-list',
                      props: [],
                      innerText: '',
                      slots: [
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Typescript'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Typescript',
                              slots: [],
                            },
                            {
                              slotName: 'prefix',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Typescript',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'React',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Webcomponents'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Web Components',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Webcomponents'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Lit.dev',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Vue.js',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'StateManagement'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'State Management',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'styled-components',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'StateManagement'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Redux',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'PHP / Laravel',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Spring'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Spring',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Spring'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Kotlin',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Go',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Node'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Node',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Spring-Boot',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'K8s',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'K8s',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Azure'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Azure Pipelines',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Azure'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Azure Services',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Scalable components',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-animated-container',
                          props: [],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-button',
                              props: [
                                {href: '/project/design-system/'},
                                {rel: 'noopener'},
                              ],
                              innerText: '',
                              slots: [
                                {
                                  slotName: '',
                                  component: 'iff-text',
                                  props: [{styling: 'label'}],
                                  innerText: 'Design System',
                                  slots: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Micro Services',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Cluster',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-animated-container',
                          props: [],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-button',
                              props: [
                                {href: '/project/apollo/'},
                                {rel: 'noopener'},
                              ],
                              innerText: '',
                              slots: [
                                {
                                  slotName: '',
                                  component: 'iff-text',
                                  props: [{styling: 'label'}],
                                  innerText: 'Apollo / GraphQL',
                                  slots: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'DevOps'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'DevOps',
                              slots: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  slotName: 'end-text',
                  component: 'iff-title-lead',
                  props: [],
                  slots: [
                    {
                      slotName: 'title',
                      component: 'iff-title',
                      props: [{level: 2}],
                      innerText: 'Who am I',
                      slots: [],
                    },
                    {
                      slotName: 'lead-text',
                      component: 'iff-text',
                      props: [{styling: 'paragraph'}],
                      innerText:
                        'My name is Julian Iff, I am a Software Engineer and with great enthusiasm, I create new digital products and features that transform how users achieve their goals. I strive to extend my knowledge in all areas of software engineering.',
                      slots: [],
                    },
                    {
                      slotName: 'lead-text',
                      component: 'iff-text',
                      props: [{styling: 'paragraph'}],
                      innerText:
                        'I work in both front- and backend with a dose of pipelines and build processes.',
                      slots: [],
                    },
                    {
                      slotName: 'lead-text',
                      component: 'iff-icon-text',
                      props: [
                        {
                          href: 'https://www.linkedin.com/in/julian-iff-36882661/',
                        },
                        {icon: 'end'},
                        {target: '_blank'},
                      ],
                      innerText: 'Get in Touch!',
                      slots: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  Typescript: leftSideText({
    title: 'Typescript',
    text: 'Fluent in both Typescript and Javascript. Wrote many Projects in Typescript and Node.js services or build systems in Javascript.',
    linkText: 'Javascript Tipps',
    linkTarget: '_self',
    link: '/project/javascript/',
  }),
  StateManagement: leftSideText({
    title: 'State Management',
    text: 'Mobx, Redux / Redux-saga, Recoil and Apollo are preferred State Management Libraries. For smaller React applications also hook reducer can be a pragmatic solution.',
  }),
  Webcomponents: leftSideText({
    title: 'Webcomponents & Lit',
    text: 'Web components are unique in encapsulating styling and structure. Lit.dev is a great library that allows building Web components in a declarative and fluent style. This Website is also #BuildWithLit.',
    linkText: 'Design System',
    linkTarget: '_self',
    link: '/project/design-system/',
  }),
  Node: leftSideText({
    title: 'Node',
    text: 'Micro Services built with express.js / Koa.js. Use of MVC and micro-service deployment patterns. Cloud ready solutions with Azure function, AWS Labmba and queues.',
    linkText: 'Lit SSR Server Test',
    linkTarget: '_blank',
    link: 'https://github.com/julianiff/lit-ssr/tree/master',
  }),
  Azure: leftSideText({
    title: 'Azure',
    text: 'Paas and Saas solutions from Azure. Azure Functions, Logic Apps or Spring Cloud clusters.',
  }),
  Spring: leftSideText({
    title: 'Spring',
    text: 'Spring makes it simple to quickly deliver production-grade Microservices, can be used with Kotlin and is a framework for fast and Secure applications.',
    linkText: 'Spring Reactive',
    linkTarget: '_self',
    link: '/project/spring-reactive/',
  }),
  DevOps: leftSideText({
    title: 'DevOps',
    text: 'To be able to release often and with confidence it is needed to have resilient pipelines and release Architecures in systems like Github actions, Gitlab and Azure Pipelines. Espetially interesting are Micro-service deployments and frontend deployment strategies.',
    linkText: 'Buildless Deployments',
    linkTarget: '_self',
    link: '/project/import-map',
  }),
};
