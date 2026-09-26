import {defineType, defineArrayMember, defineField} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    // ─── Standard text block ─────────────────────────────────────────────────
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
              }),
            ],
          },
        ],
      },
    }),

    // ─── Image ───────────────────────────────────────────────────────────────
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),

    // ─── Code snippet ─────────────────────────────────────────────────────────
    // Requires @sanity/code-input plugin
    defineArrayMember({
      type: 'code',
      title: 'Code snippet',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'Bash / Shell', value: 'bash'},
          {title: 'CSS', value: 'css'},
          {title: 'HTML', value: 'html'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'JSON', value: 'json'},
          {title: 'JSX', value: 'jsx'},
          {title: 'Markdown', value: 'markdown'},
          {title: 'SCSS', value: 'scss'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'TSX', value: 'tsx'},
          {title: 'YAML', value: 'yaml'},
        ],
        withFilename: true,
      },
    }),

    // ─── CodePen embed ────────────────────────────────────────────────────────
    defineArrayMember({
      name: 'codePen',
      title: 'CodePen embed',
      type: 'object',
      fields: [
        defineField({
          name: 'slugHash',
          title: 'Pen slug hash',
          type: 'string',
          description: 'The short hash from the CodePen URL (e.g. LEWYmeO)',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'penTitle',
          title: 'Pen title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'userName',
          title: 'CodePen username',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'height',
          title: 'Height (px)',
          type: 'number',
          initialValue: 300,
        }),
        defineField({
          name: 'defaultTab',
          title: 'Default tab',
          type: 'string',
          initialValue: 'result',
          options: {
            list: [
              {title: 'Result', value: 'result'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'JavaScript', value: 'js'},
              {title: 'HTML + Result', value: 'html,result'},
              {title: 'CSS + Result', value: 'css,result'},
              {title: 'JS + Result', value: 'js,result'},
            ],
          },
        }),
      ],
      preview: {
        select: {
          title: 'penTitle',
          subtitle: 'slugHash',
        },
        prepare({title, subtitle}) {
          return {title: `CodePen: ${title}`, subtitle}
        },
      },
    }),

    // ─── Callout ─────────────────────────────────────────────────────────────
    defineArrayMember({
      name: 'callout',
      title: 'Callout',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'note',
          options: {
            list: [
              {title: '📝 Note', value: 'note'},
              {title: '💡 Tip', value: 'tip'},
              {title: '⚠️ Warning', value: 'warning'},
              {title: '❗ Important', value: 'important'},
            ],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
      ],
      preview: {
        select: {type: 'type', content: 'content'},
        prepare({type, content}) {
          const icons: Record<string, string> = {
            note: '📝',
            tip: '💡',
            warning: '⚠️',
            important: '❗',
          }
          return {
            title: `${icons[type] ?? ''} ${type?.toUpperCase()}`,
            subtitle: content,
          }
        },
      },
    }),

    // ─── Video file upload ────────────────────────────────────────────────────
    defineArrayMember({
      name: 'video',
      title: 'Video',
      type: 'object',
      fields: [
        defineField({
          name: 'file',
          title: 'Video file',
          type: 'file',
          options: {accept: 'video/*'},
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
        defineField({
          name: 'autoplay',
          title: 'Autoplay',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'loop',
          title: 'Loop',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'muted',
          title: 'Muted',
          type: 'boolean',
          initialValue: true,
          description: 'Must be enabled for autoplay to work in most browsers',
        }),
        defineField({
          name: 'controls',
          title: 'Show controls',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      preview: {
        select: {caption: 'caption'},
        prepare({caption}: {caption?: string}) {
          return {title: caption ? `Video: ${caption}` : 'Video'}
        },
      },
    }),

    // ─── Horizontal rule ─────────────────────────────────────────────────────
    defineArrayMember({
      name: 'divider',
      title: 'Divider',
      type: 'object',
      fields: [
        defineField({
          name: 'style',
          title: 'Style',
          type: 'string',
          initialValue: 'line',
          hidden: true,
        }),
      ],
      preview: {
        prepare() {
          return {title: '— Divider —'}
        },
      },
    }),
  ],
})
