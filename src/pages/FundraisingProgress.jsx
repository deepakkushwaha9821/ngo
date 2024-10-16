import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import CircularProgressbar styles

function FundraisingProgress() {
  const [goalAchieved, setGoalAchieved] = useState(10000); // Replace with your actual data
  const totalGoal = 30000;
  const percentageAchieved = (goalAchieved / totalGoal) * 100;

  return (
    <div>
      <div>
        <CircularProgressbar 
          value={percentageAchieved}
          text={`${Math.round(percentageAchieved)}%`}
          styles={buildStyles({
            pathTransition: "stroke-dashoffset 0.5s ease 0s",
            trailColor: "#ddd",
            pathColor: "#ff7878",
            textColor: '#000',
          })}
        />
        <div>
          <span>Goal Achieved: ₹{goalAchieved}</span>
        </div>
      </div>
      <div>
        <span>Total Goal: ₹{totalGoal}</span>
      </div>
      <div>
        <span>Level Achieved: Star</span>
        <button>Rewards</button>
        <button>Copy Donation Link</button>
      </div>
      <div>
        <span>Unlock Ninja Level at 5000</span>
        <span>Time Left: Campaign Expired</span>
        <button>Extend Now</button>
      </div>
      <div>
        <span>Reference Code: pra7432</span>
      </div>
      <div>
        <button>Start Here</button>
      </div>
      <div>
        <button>Share On Whatsapp</button>
      </div>
    </div>
  );
}

export default FundraisingProgress;
