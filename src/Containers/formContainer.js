


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../Components/Form';
import { saveCard } from '../ActionTypes';

import { createStructuredSelector } from 'reselect';
import { makeSelectCardData } from '../Selector/cardSelector';


const mapStateToProps = createStructuredSelector({
  cardList: makeSelectCardData(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ saveCard }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);