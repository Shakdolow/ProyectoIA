import {Router} from 'express';
const router=Router()

router.get('/',(req,res)=>res.render('index',{title:'IA'}));
router.get('/busqueda',(req,res)=>res.render('busqueda',{title:'Busqueda'}));
router.get('/usuario',(req,res)=>res.render('usuario',{title:'Usuario'}));
router.get('/documentacion',(req,res)=>res.render('documentacion',{title:'Documentación'}));
router.get('/registrar',(req,res)=>res.render('registrar',{title:'Registro'}));

export default router