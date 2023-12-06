import {Component} from 'react'

import {
  EditableTextBgCont,
  EditableTextCont,
  EditableTextHead,
  EditableTextPara,
  EditableEditCont,
  EditableTextInput,
  EditableTextBtn,
} from './styledComponents'

class EditableText extends Component {
  state = {searchInput: '', savedStatus: false}

  onChangedInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickedBtn = () => {
    this.setState(prevState => ({savedStatus: !prevState.savedStatus}))
  }

  render() {
    const {searchInput, savedStatus} = this.state
    const BtnText = savedStatus ? 'Edit' : 'Save'
    return (
      <EditableTextBgCont>
        <EditableTextCont>
          <EditableTextHead>Editable Text Input</EditableTextHead>
          <EditableEditCont>
            {savedStatus ? (
              <EditableTextPara>{searchInput}</EditableTextPara>
            ) : (
              <EditableTextInput
                type="text"
                value={searchInput}
                onChange={this.onChangedInput}
              />
            )}

            <EditableTextBtn type="button" onClick={this.onClickedBtn}>
              {BtnText}
            </EditableTextBtn>
          </EditableEditCont>
        </EditableTextCont>
      </EditableTextBgCont>
    )
  }
}

export default EditableText
