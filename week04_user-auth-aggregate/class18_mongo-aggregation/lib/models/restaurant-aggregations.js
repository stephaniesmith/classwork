

const cleanest = ({ borough, top = 10 }) => {
    const steps = [
        unwindGrades,
        filterBadGrades,
        groupByRestaurant,
        sortByCleanest,
        getTop(+top)
    ];

    if(borough) steps.unshift(getByBorough(borough));

    return steps;
};

const getByBorough = borough => ({
    $match: { borough }
});

const unwindGrades = {
    $unwind: '$grades'
};

const filterBadGrades = {
    $match: {
        'grades.grade': {
            $ne: 'Not Yet Graded'
        },
        'grades.score': {
            $gt: 0
        }
    }
};

const groupByRestaurant =  {
    $group: {
        _id: '$_id',
        name: { $first: '$name' },
        cuisine: { $first: '$cuisine' },
        borough: { $first: '$borough' },
        average: { $avg: '$grades.score' },
        min: { $min: '$grades.score' },
        max: { $max: '$grades.score' }
    }
};

const sortByCleanest = {
    $sort: { 
        average: 1,
        name: 1
    }
};

const getTop = (top = 10) => ({
    $limit: top
});

module.exports = {
    cleanest
};