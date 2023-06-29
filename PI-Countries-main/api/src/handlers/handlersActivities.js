const { getActivities, postActivity, deleteActivity } = require("../controllers/activityControllers");




const handlerPost = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        let newActivies = await postActivity( name, difficulty, duration, season, countries );

        res.status(200).json(newActivies);
    } catch (error) {
console.log(error)
        res.status(500).json({error: error.mesagge });
        
    }
};

const handlerGetAll = async (req, res)=>{
    try {
        let allActivities = await getActivities(req.query);

        res.status(200).json(allActivities);

    } catch (error) {
        
        res.status(500).json({error: error.message });
    }
};

const handlerDeleteAct = async (req, res) =>{
    try {
        const {name} = req.params

        let deleteAct = await deleteActivity(name);
        

        if (deleteAct === 0) {
            return res.status(404).json({ message: 'No se encontró la actividad' });
          }
      
          return res.status(200).json({ message: 'Actividad eliminada exitosamente' });
        } catch (error) {
          console.error('Error al eliminar la actividad:', error);
          return res.status(500).json({ message: 'Error interno del servidor' });
        }
      };


module.exports = {
    handlerGetAll,
    handlerPost,
    handlerDeleteAct
}
