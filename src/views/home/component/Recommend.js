import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
        const {recommendList} =this.props;
		return (
			<RecommendWrapper>
				{
					recommendList.map((item) => {
						return (
                        <RecommendItem key={item.id}>
                            <img src={item.imgUrl} alt='' />
                        </RecommendItem>
                        );
					})
				}
			</RecommendWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	recommendList:state.home.recommendList
})

export default connect(mapStateToProps, null)(Recommend);