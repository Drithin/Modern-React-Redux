import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
           
           
           

           <ApprovalCard>
           <CommentDetail author="Dan" timeAgo="Today at 6:00 PM" comment="Nice one!" avatar={faker.image.avatar()}/>
           </ApprovalCard>

           <ApprovalCard>
           <CommentDetail author="Alex" timeAgo="Today at 7:00 PM" comment="Good one!"avatar={faker.image.avatar()} />
           </ApprovalCard>

           <ApprovalCard>
           <CommentDetail author="Jane" timeAgo="Today at 8:00 PM" comment="Awesome one!" avatar={faker.image.avatar()}/>
           </ApprovalCard>
          

        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
