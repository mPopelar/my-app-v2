import { connect, Dispatch } from 'react-redux';
import * as actions from 'src/actions/myFormActions';
import { MyForm } from 'src/components/MyForm';
import { IStoreState } from 'src/types';

export function mapStateToProps({ stringToDisplay }: IStoreState) {
    return {
        stringToDisplay
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<actions.IDisplayNewString>) {
    return {
         onDisplayNewString: () => dispatch(actions.displayNewString())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);