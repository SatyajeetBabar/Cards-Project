import React from 'react'
import User from './components/User'
import Cards from './components/Cards';


const App = () => {
  const jobs = [
  {
    brandlogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/330px-Google_%22G%22_logo.svg.png",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small_2x/amazon-logo-amazon-icon-transparent-free-png.png",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTs3WgzCPaAGPn7XEEIenK7kxxvzH6vxJew&s",
    company: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwtbUoFG0YhKihqEIWXxg8l2LWQ7e-L9tpQ&s",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://img.icons8.com/win10/1200/tesla-logo.jpg",
    company: "Tesla",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Austin, USA"
  },
  {
    brandlogo: "https://cdn-icons-png.flaticon.com/512/5436/5436922.png",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png",
    company: "Uber",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://cdn.iconscout.com/icon/free/png-256/free-linkedin-logo-icon-svg-download-png-1581908.png?f=webp",
    company: "LinkedIn",
    datePosted: "8 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Gurgaon, India"
  }
];

  return (
    <div className='parent'>
      {jobs.map(function(elem,idx){
        return <div key={idx}>
        <Cards  
        company={elem.company} 
        post={elem.post}  
        datePosted={elem.datePosted} 
        tag1={elem.tag1} 
        tag2={elem.tag2} 
        pay={elem.pay} 
        location={elem.location} 
        brandlogo={elem.brandlogo}/>
        </div>
      })}
    </div>
  )

}

export default App