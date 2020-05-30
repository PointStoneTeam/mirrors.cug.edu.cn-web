import markdownStyles from './markdown-styles.module.css'

export default function PostContent({ content }) {

    return (
        <article
            className={markdownStyles['markdown-body']}
            dangerouslySetInnerHTML={{ __html: content }}
        />
       
    )
}