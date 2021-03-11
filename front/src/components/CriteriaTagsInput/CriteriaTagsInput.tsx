import { IonChip, IonIcon, IonLabel } from '@ionic/react';
import { close } from 'ionicons/icons'
import React from 'react'
import ReactTags, {ReactTagsProps, Tag} from 'react-tag-autocomplete'
import './CriteriaTagsInput.scss'

class CriteriaTagsInput extends React.Component<{defaultTags?: Array<Tag>, onChange?: (tags: Tag[]) => void}, ReactTagsProps>{
    reactTags: any;
    constructor (props: any) {
      super(props)
      this.state = {
        tags: this.props.defaultTags || Array<Tag>(),
        suggestions : [
            {id: 'Design', name: 'Design'},
            {id: 'Idea', name: 'Idea'},
            {id: 'Code', name: 'Code'}
        ],
        onAddition: this.onAddition,
        onDelete: this.onDelete,
      }
  
      this.reactTags = React.createRef()
    }
  
    onDelete (i: number) {
      const tags = (this.state.tags || []).slice(0)
      tags.splice(i, 1)
      this.setState({ tags })
      this.props.onChange?.(tags);
    }
  
    onAddition (tag: any) {
      const tags = Array<Tag>().concat((this.state.tags || []), tag)
      this.setState({ tags })
      this.props.onChange?.(tags);
    }

    TagComponent(props: any) {
        return (
            <IonChip onClick={props.onDelete}>
                <IonLabel>{props.tag.name}</IonLabel>
                <IonIcon icon={close} />
            </IonChip>
        )
    }
  
    render () {
      return (
        <>
          <ReactTags
            ref={this.reactTags}
            tags={this.state.tags}
            suggestions={this.state.suggestions}
            placeholderText='Add new criteria'
            noSuggestionsText=''
            onInput={e => {this.proposeNewSuggestion(e)}}
            onDelete={this.onDelete.bind(this)}
            onAddition={this.onAddition.bind(this)}
            tagComponent={this.TagComponent}
          />
        </>
      )
    }

    proposeNewSuggestion(str: string){
      const suggestions = (this.state.suggestions || []);
      if (suggestions.length == 3){
        suggestions.push({id: str, name: str});
      }else{
        suggestions[suggestions.length - 1] = {id: str, name: str};
      }
      this.setState({suggestions})
    }
}

export default CriteriaTagsInput