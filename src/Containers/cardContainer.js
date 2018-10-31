
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../Components/Card';
import { saveCard } from '../ActionTypes';
import { createStructuredSelector } from 'reselect';
import { makeSelectCardData } from '../Selector/cardSelector';

const mapStateToProps = createStructuredSelector({
  cardData: makeSelectCardData(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ saveCard }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Card);